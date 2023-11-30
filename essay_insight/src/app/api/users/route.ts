import { container } from '../../../../cosmosClient';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextResponse) {
  const querySpec = { query: 'SELECT * FROM c' };

  const data_items = await container.items.query(querySpec).fetchAll();
  return NextResponse.json(data_items);
}

export async function POST(req: NextRequest) {
  const new_json = await req.json();

  const createdItem = await container.items.create(new_json);

  return new NextResponse(JSON.stringify(createdItem.item.id), {
    status: 201,
  });
}
