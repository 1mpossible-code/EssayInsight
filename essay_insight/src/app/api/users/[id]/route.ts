import { container } from '../../../../..//cosmosClient';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  console.log(params);
  const item_id = params.id;

  if (!item_id) {
    return NextResponse.json(
      { error: 'Missing ID parameter' },
      { status: 400 }
    );
  }

  const sql = `SELECT * FROM c WHERE c.id = "${item_id}"`;

  const { resources: users } = await container.items.query(sql).fetchAll();

  if (!users.length) {
    return NextResponse.json(
      { error: `User with ID ${'id'} not found` },
      { status: 404 }
    );
  }
  //   @ts-ignore
  console.log(users);

  //   @ts-ignore
  return NextResponse.json(users[0]);
}

// export async function GET(
