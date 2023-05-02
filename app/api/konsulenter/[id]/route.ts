import { type NextRequest, NextResponse } from "next/server";
import { KonsulentData } from "../konsulent.data";
import { GetKonsulentParams } from "../konsulent.types";

export const GET = async(request: NextRequest, {params}: GetKonsulentParams) => {
    const { id } = params;
    const konsulent = KonsulentData.filter((k) => k.id === id).pop();
    if (konsulent !== undefined) {
        return NextResponse.json(konsulent, {status: 200})
    }
    NextResponse.json(new Error("Ikke funner"), {status: 404})
}