interface Props {
  params: {
    slug: string;
  };
}

export default function EducationSlugPage({ params }: Props) {
  return <div>Education: {params.slug}</div>;
}