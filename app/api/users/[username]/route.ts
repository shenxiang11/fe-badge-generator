import axios from "axios";

export async function GET(request: Request, { params }: { params: { username: string }}) {

  const output = {
    message: '',
  };

  try {
    const response = await axios.get(`https://typehero.dev/@${params.username}`);
    const reg = /Solved: <span class=\"text-foreground text-xl\">(\d+)<\/span>\/<!-- -->(\d+)/g
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
