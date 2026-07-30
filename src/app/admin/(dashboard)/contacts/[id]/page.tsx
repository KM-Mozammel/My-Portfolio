interface Props {
  params: {
    slug: string;
  };
}

export default function contactSlugPage({ params }: Props) {
  return <div>Contact: {params.slug}</div>;
}