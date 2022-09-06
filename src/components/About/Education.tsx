import { Box, Text, Timeline } from '@mantine/core';

import { education } from '@/data/About/education';

const Education = () => {
  return (
    <Box mt='md'>
      <Text size={42} weight='bold'>
        Education
      </Text>
      <Timeline active={1} mt='sm'>
        {education.map((each) => (
          <Timeline.Item
            title={
              <Text weight='bold' size='lg'>
                {each.type}
              </Text>
            }
            key={each.name}
          >
            <Text>{each.name}</Text>
            <Text size='md'>{each.major}</Text>
            <Text size='sm' color='dimmed' mt={4}>
              {each.timePeriod}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Box>
  );
};

export default Education;
