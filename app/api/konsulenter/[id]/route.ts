import { type NextRequest, NextResponse } from "next/server";
import { KonsulentData } from "../konsulent.data";

type GetParams = {
    params: {
        id: string
    }
}

export const GET = async(request: NextRequest, {params}: GetParams) => {
    const { id } = params;
    const konsulent = KonsulentData.filter((k) => k.id === id).pop();
    if (konsulent !== undefined) {
        return NextResponse.json(konsulent, {status: 200})
    }
    NextResponse.json(new Error("Ikke funner"), {status: 404})
}