import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import getUserById from "@/domain/usecases/getUserById/getUserById";

export default function Profile() {
  const { fetch, isPending, isLoading, data } = getUserById({
    id: "jefferson-ciandt",
  });
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-200">
      <div className="w-1/4 h-1/4">
        <Card>
          {isPending && (
            <>
              <Button onClick={fetch}>Load</Button>
            </>
          )}
          {isLoading && (
            <>
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </>
          )}
          {!isLoading && !isPending && (
            <>
              <CardHeader>
                <CardTitle>
                  <Avatar>
                    <AvatarImage src={data?.avatarUrl} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="mt-4">{data?.name}</div>
                </CardTitle>
                <CardDescription>{data?.login}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{data?.bio}</p>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
