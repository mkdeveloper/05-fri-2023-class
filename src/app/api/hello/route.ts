import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    To: "CookingMachine",
    Food: "Biryani",
    Plates: 50,
  });
}

export async function POST(request: NextRequest) {
  const obj = await request.json();
  if (obj.Type) {
    return NextResponse.json({
      status: "cooking",
      Cooking: obj.Type,
      quantity: obj.Quantity,
    });
  } else {
    return new NextResponse("Failed to fetch");
  }
}

export async function PUT(request: NextRequest) {
  const obj = await request.json();
  if (obj.Type) {
    return NextResponse.json({
      status: "cooking",
      Cooking: obj.Type,
      quantity: obj.Quantity,
    });
  } else {
    return new NextResponse("Failed to fetch");
  }
}

/* Note: Right now, if we send delete request to the server 
from Postman with some json data, it will cause an error with the message
"status 400: Bad Request" and if we just send delete request to the
server without any json data, it will crash the server and cause an error
with the message "status: 500 Internal Server Error"

Usually in "DELETE" method we send id or reference to the server,
server looks for the required id or reference in the data that is stored
in it, if the request matched the data will be deleted.
*/

export async function DELETE(request: NextRequest) {
  const obj = await request.json();
  if (obj.Type) {
    return NextResponse.json({
      status: "cooking",
      Cooking: obj.Type,
      quantity: obj.Quantity,
    });
  } else {
    return new NextResponse("Failed to fetch");
  }
}
