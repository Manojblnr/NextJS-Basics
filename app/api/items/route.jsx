export async function GET(req){
    // return new Response('coming from server response');
    const type = req.nextUrl.searchParams.get('type');
    console.log('type is', type)
    return Response.json([
        {title: 'title 1', type},
        {title: 'title 2'}
    ])
}

export async function POST(req){
    const data = await req.json();
    return Response.json([{message: 'post method success', data}])
}