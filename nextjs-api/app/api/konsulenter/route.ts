import { type NextRequest, NextResponse } from "next/server";
import { KonsulentData } from "./konsulent.data";
import { sleep } from "../utils/utils";

export const GET = async(request: NextRequest) => {
    const { searchParams } = new URL(request.url);
    const delay = searchParams.get('delay');
    const ms: number = delay ? Number(delay) : 0;

    const konsulenter = KonsulentData;
    if (konsulenter) {
        if (delay) {
            await sleep(ms);
            return NextResponse.json(konsulenter, {status: 200, headers: {
                'Access-Control-Allow-Origin': '*',
            }})
        } else {
            return NextResponse.json(konsulenter, {status: 200, headers: {
                'Access-Control-Allow-Origin': '*',
            }})
        }
    } 
    NextResponse.json(new Error("Ikke funner"), {status: 404})
}