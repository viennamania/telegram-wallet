import { NextResponse, type NextRequest } from "next/server";


import {
	getOneByNickname,
} from '@lib/api/user';



export async function POST(request: NextRequest) {

  const body = await request.json();

  const { nickname} = body;


  const user = await getOneByNickname(nickname);

  if (!user) {
    NextResponse.json({
      result: null,
    });
  }

  NextResponse.json({
    result: user,
  });


  
}
