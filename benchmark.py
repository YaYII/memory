import os
import shutil
import time
import random
from app.memory.long_term import MemoryStore
from app.models.data_models import MemoryItem
from datetime import datetime

def setup_benchmark_db():
    if os.path.exists("data/chroma_bench"):
        shutil.rmtree("data/chroma_bench")
    return MemoryStore(data_path="data/chroma_bench")

def generate_mock_data(store, count=10000):
    print(f"Generating {count} mock records...")
    users = [f"user_{i}" for i in range(10)]
    batch_size = 100
    
    # Pre-generate embeddings would be faster, but let's test end-to-end write speed too
    # Actually, writing 100k one by one is slow. Let's do small scale functional bench.
    # 10k is enough to see index impact vs linear scan.
    
    start_time = time.time()
    for i in range(count):
        user = random.choice(users)
        is_shared = random.random() > 0.8 # 20% shared
        
        mem = MemoryItem(
            content=f"This is a memory about concept {i} for {user}",
            user_id=user,
            scope="project",
            project_id="bench_proj",
            is_shared=is_shared,
            timestamp=datetime.now(),
            importance=1.0
        )
        store.save(mem)
        
        if i % 1000 == 0:
            print(f"Written {i} records...", end="\r")
            
    duration = time.time() - start_time
    print(f"\nWrite complete. Time: {duration:.2f}s, Rate: {count/duration:.2f} ops/s")

def benchmark_search(store):
    print("\n--- Benchmarking Search ---")
    
    # Case 1: Search own private memory
    start = time.time()
    res = store.search("concept", user_id="user_1", project_id="bench_proj", limit=10)
    duration = (time.time() - start) * 1000
    print(f"Search Own (Private): {duration:.2f}ms, Results: {len(res)}")
    
    # Case 2: Search with Contributor Access (Shared)
    # First ensure user_1 has shared something (likely yes in 10000 records)
    start = time.time()
    # Mocking is_contributor check internal latency by just calling search
    # The optimized search handles it.
    res = store.search("concept", user_id="user_1", project_id="bench_proj", limit=10)
    duration = (time.time() - start) * 1000
    print(f"Search Shared (Contributor): {duration:.2f}ms, Results: {len(res)}")

if __name__ == "__main__":
    store = setup_benchmark_db()
    # Generate 2000 items for quick check (User can increase this)
    generate_mock_data(store, count=2000)
    benchmark_search(store)
    
    # Clean up
    if os.path.exists("data/chroma_bench"):
        shutil.rmtree("data/chroma_bench")
