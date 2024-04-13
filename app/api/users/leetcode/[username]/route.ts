import axios from "axios";


interface LeetCodeCount {
  difficulty: string;
  count: number;
}

interface processResponse {
  data: {
    data: {
      userProfileUserQuestionProgress: {
        numAcceptedQuestions: LeetCodeCount[];
        numFailedQuestions: LeetCodeCount[];
        numUntouchedQuestions: LeetCodeCount[];
      };
    };
  };
}

const queryProcess = (user: string) =>
  `{"variables": { "userSlug" : "${user}" },
    "query": "query userQuestionProgress($userSlug: String!) { userProfileUserQuestionProgress(userSlug: $userSlug) { numAcceptedQuestions { difficulty count } numFailedQuestions { difficulty count }numUntouchedQuestions { difficulty count } }}"
}`;

export async function GET(request: Request, { params }: { params: { username: string }}) {

  const output = {
    message: '',
  };

  try {
    const processResponse: processResponse = await axios.post(
      "https://leetcode.cn/graphql",
      queryProcess(params.username as string),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const solved = processResponse.data.data.userProfileUserQuestionProgress.numAcceptedQuestions.reduce(
      (sum, item) => sum + item.count,
      0
    );

    const failed = processResponse.data.data.userProfileUserQuestionProgress.numFailedQuestions.reduce(
      (sum, item) => sum + item.count,
      0
    );

    const untouched = processResponse.data.data.userProfileUserQuestionProgress.numUntouchedQuestions.reduce(
      (sum, item) => sum + item.count,
      0
    );

    const total = solved + failed + untouched;

    output.message = `${solved}/${total}`;
  } catch (e) {
    output.message = 'Error';
  }

  return Response.json(output);
}
