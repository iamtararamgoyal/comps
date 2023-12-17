import Accordion from "../Accordion";
function AccordionPage() {

  const items = [
    {
      id: '1',
      label: 'Can I use React on a Project?',
      content: 'You can use React on a any project you want.You can use React on a any project you want.You can use React on a any project you want.You can use React on a any project you want.You can use React on a any project you want.'
    },
    {
      id: '2',
      label: 'Can I use Javascript on a Project?',
      content: 'You can use React on a any project you want.You can use React on a any project you want.You can use React on a any project you want.You can use React on a any project you want.You can use React on a any project you want.'
    },
    {
      id: '3',
      label: 'Can I use CSS on a Project?',
      content: 'You can use CSS on a any project you want.You can use CSS on a any project you want.You can use CSS on a any project you want.You can use CSS on a any project you want.You can use CSS on a any project you want.'
    },
  ];

  return <Accordion items={items} />

}

export default AccordionPage;
