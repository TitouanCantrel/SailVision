import asyncio
import random
import datetime
import websockets
import json

async def handler(websocket, path):
    while True:
        data = [random.randint(0, 100) for _ in range(10)]
        await websocket.send(json.dumps(data))
        await asyncio.sleep(0.1)

start_server = websockets.serve(handler, "192.168.1.27", 8000)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()