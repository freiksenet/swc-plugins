/*
 * Basic fixtures
 */

const StaticString = p => <p css="flex: 1;">A</p>

const StaticTemplate = p => (
  <p
    css={`
      flex: 1;
    `}
  >
    A
  </p>
)

const ObjectProp = p => <p css={{ color: 'blue' }}>A</p>

const NoChildren = p => <p css="flex: 1;" />

const CssHelperProp = p => (
  <p
    css={css`
      color: blue;
    `}
  >
    A
  </p>
)

/*
 * Dynamic prop
 */

const CustomComp = p => <Paragraph css="flex: 1">H</Paragraph>

const DynamicProp = p => <p css={props.cssText}>H</p>

const LocalInterpolation = p => (
  <p
    css={`
      background: ${props.bg};
    `}
  >
    H
  </p>
)

const FuncInterpolation = p => (
  <p
    css={`
      color: ${props => props.theme.a};
    `}
  >
    H
  </p>
)

const radius = 10
const GlobalInterpolation = p => (
  <p
    css={`
      border-radius: ${radius}px;
    `}
  >
    H
  </p>
)

const LocalCssHelperProp = p => (
  <p
    css={css`
      color: ${p.color};
    `}
  >
    A
  </p>
)

const DynamicCssHelperProp = p => (
  <p
    css={css`
      color: ${props => props.theme.color};
    `}
  >
    A
  </p>
)

const CustomCompWithDot = p => <Button.Ghost css="flex: 1">H</Button.Ghost>

const NestedCompWithDot = p => (
  <Button.Ghost.New css="flex: 1">H</Button.Ghost.New>
)

const CustomCompWithDotLowerCase = p => (
  <button.ghost css="flex: 1">H</button.ghost>
)

const CustomElement = p => <button-ghost css="flex: 1">H</button-ghost>

/* styled component defined after function it's used in */

const EarlyUsageComponent = p => <Thing3 css="color: red;" />

const Thing3 = styled.div`
  color: blue;
`

const ObjectInterpolation = p => {
  const theme = useTheme()

  return (
    <p
      css={{
        color: theme.colors.red,
      }}
    >
      H
    </p>
  )
}

const ObjectInterpolationCustomComponent = p => {
  const theme = useTheme()

  return (
    <Thing3
      css={{
        color: theme.colors.red,
      }}
    >
      H
    </Thing3>
  )
}

const ObjectInterpolationInKey = p => {
  const theme = useTheme()

  return (
    <Thing3
      css={{
        [theme.breakpoints.md]: {
          color: 'red',
        },
      }}
    >
      H
    </Thing3>
  )
}

const ObjectFnInterpolationInKey = p => {
  const theme = useTheme()

  return (
    <Thing3
      css={{
        [theme.breakpoints.md()]: {
          color: 'red',
        },
      }}
    >
      H
    </Thing3>
  )
}

const ObjectFnSimpleInterpolationInKey = p => {
  const foo = '@media screen and (max-width: 600px)'

  return (
    <Thing3
      css={{
        [foo]: {
          color: 'red',
        },
      }}
    >
      H
    </Thing3>
  )
}

const ObjectPropMixedInputs = p => {
  const color = 'red'

  return (
    <p
      css={{
        background: p.background,
        color,
        textAlign: 'left',
        '::before': { content: globalVar },
        '::after': { content: getAfterValue() },
      }}
    >
      A
    </p>
  )
}

const ObjectPropWithSpread = () => {
  const css = { color: 'red' }
  const playing = true

  return (
    <div
      css={{
        ...css,
        ...(playing ? { opacity: 0, bottom: '-100px' } : {}),
      }}
    />
  )
}

const id = (x) => x;

const LocalCallInterpolation = (p) => {
  const color = "red";

  return (
    <p
      css={`
        color: ${id(color)};
      `}
    >
      H
    </p>
  );
};

const LocalCallInterpolation2 = () => {
  return (
    <p
      css={`
        /* direct call */
        color: ${id("red")};
      `}
    >
      H
    </p>
  );
};

const LocalCallCssHelperProp = (p) => {
  const color = "red";

  return (
    <p
      css={css`
        color: ${id(color)};
      `}
    >
      H
    </p>
  );
};

// https://github.com/vercel/next.js/issues/38914
function Home() {
  const { x } = { x: 4 };

  return (
    <div
      css={css`
        /* direct */
        ${myCss(2)}
        /* indirect */
      ${myCss(x)}
      `}
    />
  );
}

const myCss = (x) => css`
  margin: ${x}px;
`;

const colorMap = {
  orange: '#E3750E',
  blue: '#38699F',
  green: '#3F9348',
};

const colorMap2 = {
    red: 'orange',
    cyan: 'blue',
    lime: 'green',
}

const LocalMemberInterpolation = (p) => {
  const color = "red";

  return (
    <p
      css={`
        color: ${colorMap[color]};
      `}
    >
      H
    </p>
  );
};

const LocalMemberInterpolation2 = (p) => {
  const color = "red";

  return (
    <p
      css={`
        color: ${colorMap[colorMap2[color]]};
      `}
    >
      H
    </p>
  );
};

const LocalMemberInterpolation3 = (p) => {
  const color = "red";

  return (
    <p
      css={`
        color: ${colorMap[id(color)]};
      `}
    >
      H
    </p>
  );
};

const LocalMemberInterpolation4 = () => {
  return (
    <p
      css={`
        color: ${colorMap["red"]};
      `}
    >
      H
    </p>
  );
};

const LocalMemberCssHelperProp = (p) => {
  const color = "red";

  return (
    <p
      css={css`
        color: ${colorMap[color]};
      `}
    >
      H
    </p>
  );
};
