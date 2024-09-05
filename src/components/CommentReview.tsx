import { Text,Divider,Rating,Group } from "@mantine/core";
import { CommentReviewProps } from "@lib/types";

export default function CommentReview({name, rating, review}:CommentReviewProps){
    return(
        <div>
            <Divider mb={"sm"}/>
            <Group justify="center">
                <Text size="lg" fw={"bold"}>
                    {name}
                </Text>
            <Rating value={rating} readOnly/>
            </Group>
            <Text size="sm" ta={"center"} mb={"sm"} c={"gray"}>
                {review}
            </Text>
        </div>
    )
}