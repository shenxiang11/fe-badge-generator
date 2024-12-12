import axios from "axios";

export async function GET(request: Request, { params }: { params: { username: string }}) {

  const output = {
    message: '',
  };

  try {
    const response = await axios.get(`https://typehero.dev/@${params.username}`);

    const reg = /<text x="135" y="110" text-anchor="middle" dominant-baseline="middle" class="fill-muted-foreground group-hover:underline">Total<\/text><text x="140" y="140" text-anchor="middle" dominant-baseline="middle" class="fill-foreground text-4xl font-bold">(\d+)<\/text><text x="140" y="170" text-anchor="middle" dominant-baseline="middle" class="fill-muted-foreground text-sm">of (\d+)<\/text>/;
    const match = reg.exec(response.data);

    if (match) {
      output.message = `${match[1]}/${match[2]}`;
    } else {
      output.message = 'Error';
    }
  } catch (e) {
    output.message = 'Error';
  }

  return Response.json(output);
}
