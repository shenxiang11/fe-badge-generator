import axios from "axios";

export async function GET(request: Request, { params }: { params: { username: string }}) {

  const output = {
    message: '',
  };

  try {
    const response = await axios.get(`https://typehero.dev/@${params.username}`);

    const reg = /{\"totalCompleted\":(\d+),\"chartData\":\"\$([0-9,]+)\",\"totalChallenges\":(\d+),\"allCompletedHref\":\"\/@.*?\/completed\"}/;
    const match = reg.exec(response.data);

    if (match) {
      output.message = `${match[1]}/${match[3]}`;
    } else {
      output.message = 'Error';
    }
  } catch (e) {
    output.message = 'Error';
  }

  return Response.json(output);
}
