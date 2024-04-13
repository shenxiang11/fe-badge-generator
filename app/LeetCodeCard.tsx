"use client";

import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {Image} from "@nextui-org/image";
import {Snippet} from "@nextui-org/snippet";
import {useState} from "react";

export default function LeetCodeCard() {
  const [username, setUsername] = useState('');
  const [badgeUrl, setBadgeUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBadgeGenerate = () => {
    setLoading(true);
    setBadgeUrl(`https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Ffe-badge-generator.vercel.app%2Fapi%2Fusers%2Fleetcode%2F${username}&query=message&style=for-the-badge&logo=leetcode&logoColor=yellow&label=LeetCode&labelColor=black&color=%23ffa116`)
  }

  const stopLoading = () => {
    setLoading(false);
  }

  return (
    <Card>
      <CardHeader>
        <h2 className='text-center text-2xl font-medium'>LeetCode Badge Generator</h2>
      </CardHeader>
      <CardBody>
        <div className='w-full space-y-4'>
          <Input
            label="Your LeetCode username"
            variant="bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Button
            color="primary"
            fullWidth
            onClick={handleBadgeGenerate}
            isLoading={loading}
          >
            Generate Badge
          </Button>

          {
            badgeUrl && (
              <>
                <div>
                  <Link
                    href={`https://leetcode.cn/${username}`}
                    target="_blank"
                  >
                    <Image
                      onLoad={stopLoading}
                      onError={stopLoading}
                      radius="none"
                      src={badgeUrl}
                      alt="LeetCode Badge"
                    />
                  </Link>
                </div>

                <Snippet
                  variant="bordered"
                  codeString={`[![LeetCode](${badgeUrl})](https://leetcode.cn/${username})`}
                >Copy Markdown Code</Snippet>
              </>
            )
          }
        </div>
      </CardBody>
    </Card>

  )
}
