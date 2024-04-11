"use client";

import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import {Divider} from "@nextui-org/divider";
import {Radio, RadioGroup} from "@nextui-org/radio";
import {Button} from "@nextui-org/button";
import axios from "axios";

// 啥也不干，就是拼接一个图片地址，请求会由图片发起

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className='w-full'>
        <CardHeader>
          <h2 className='text-center text-2xl font-medium'>Type Hero Badge Generator</h2>
        </CardHeader>
        <CardBody>
          <div className='w-[400px] space-y-4'>
            <Input label="Email" placeholder="Your Type Hero username" variant="bordered" />

            <Divider className="my-4" />

            <RadioGroup
              label="Badge style"
              defaultValue="flat-square"
            >
              <Radio value="flat">flat</Radio>
              <Radio value="flat-square">flat-square</Radio>
              <Radio value="plastic">plastic</Radio>
              <Radio value="for-the-badge">for-the-badge</Radio>
              <Radio value="social">social</Radio>
            </RadioGroup>

            <Input label="Label" />

            <Button
              color="primary"
            >
              Generate Badge
            </Button>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
