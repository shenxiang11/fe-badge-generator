"use client";

import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {useState} from "react";
import {Image} from "@nextui-org/image";
import {Link} from "@nextui-org/link";
import {Snippet} from "@nextui-org/snippet";

// 啥也不干，就是拼接一个图片地址，请求会由图片发起

export default function Home() {

  const [username, setUsername] = useState('');
  const [badgeUrl, setBadgeUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBadgeGenerate = () => {
    setLoading(true);
    setBadgeUrl(`https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Ftype-hero-badge-generator.vercel.app%2Fapi%2Fusers%2F${username}&query=message&style=for-the-badge&logo=typescript&logoColor=%23ffffff&label=Type%20Hero&labelColor=%233178c6&color=%23f4f4f5`)
  }

  const stopLoading = () => {
    setLoading(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='w-screen-lg'>
        <Card>
          <CardHeader>
            <h2 className='text-center text-2xl font-medium'>Type Hero Badge Generator</h2>
          </CardHeader>
          <CardBody>
            <div className='w-full space-y-4'>
              <Input
                label="Your Type Hero username"
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
                        href={`https://typehero.dev/@${username}`}
                        target="_blank"
                      >
                        <Image
                          onLoad={stopLoading}
                          onError={stopLoading}
                          radius="none"
                          src={badgeUrl}
                        />
                      </Link>
                    </div>

                    <Snippet
                      variant="bordered"
                      codeString={`![Type Hero](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Ftype-hero-badge-generator.vercel.app%2Fapi%2Fusers%2F${username}&query=message&style=for-the-badge&logo=typescript&logoColor=%23ffffff&label=Type%20Hero&labelColor=%233178c6&color=%23f4f4f5)(https://typehero.dev/@${username})`}
                    >Copy Markdown Code</Snippet>
                  </>
                )
              }
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
