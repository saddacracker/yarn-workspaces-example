const Box = ({
  variant,
  children
}) => {
  
  const variantMapping = {
    div: 'div',
    span: 'span',
    section: 'section',
    article: 'article',
    main: 'main',
    code: 'code',
    aside: 'aside',
    header: 'header',
    footer: 'footer',
    nav: 'nav',
  };

  const BoxComponent = variant ? variantMapping[variant] : 'div';
  return (
    <BoxComponent>
      {children}
    </BoxComponent>
  );
};

export default Box;
