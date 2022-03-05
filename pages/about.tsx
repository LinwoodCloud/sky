import * as React from 'react';
import type { NextPage } from 'next';
import { Anchor, Box, Button, Container, Text } from '@mantine/core';
import Link from '../src/Link';

const About: NextPage = () => {
  return (
    <Container size="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text component="h1">
          About
        </Text>
        <Text>
          <Link href="https://github.com/LinwoodCloud/sky">GitHub</Link>
        </Text>
      </Box>
    </Container>
  );
};

export default About;
