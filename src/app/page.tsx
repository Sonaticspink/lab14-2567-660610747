"use client";
import CommentReview from "@components/CommentReview";
import Footer from "@components/Footer";
import YourRating from "@components/YourRating";
import YourReview from "@components/YourReview";
import { Container, Group, Pagination, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <YourRating/>
      <YourReview/>
      <CommentReview name="Elon Musk" rating={5} review="Best pizza in this world. I give you X score."/>
      <CommentReview name="Mark Zuck" rating={4} review="My favourite part is pepperoni"/>
      <Group justify="center">
        <Pagination total={20} color="orange"/>
      </Group>
      <Footer year="2024" name="Chittapan Phahongsa" studentId="660610747"/>
    </Container>
  );
}
