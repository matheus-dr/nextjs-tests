import {GetServerSideProps} from "next";

type BlogPostProps = {
    date: string
}

export default function BlogPost({ date }: BlogPostProps) {
    return (
        <h1>{date}</h1>
    )
}

export async function getStaticParams() {
    return {
        paths: [],
        fallback: false,
    }
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            date: new Date().toISOString(),
        },
    }
}