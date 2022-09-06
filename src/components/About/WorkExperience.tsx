import { Box, List, Text, Timeline } from '@mantine/core';

import { workExperience } from '@/data/About/workExperience';

const WorkExperience = () => {
  return (
    <Box mt='md'>
      <Text size={42} weight='bold'>
        Work Experience
      </Text>
      <Timeline active={0} mt='sm'>
        {workExperience.map((each) => (
          <Timeline.Item
            title={
              <Text weight='bold' size='lg'>
                {each.type}
              </Text>
            }
            key={each.name}
          >
            <Text>{each.name}</Text>
            <List>
              {each.tasks.map((task, idx) => (
                <List.Item key={idx}>{task}</List.Item>
              ))}
            </List>
            <Text size='sm' color='dimmed' mt={4}>
              {each.timePeriod}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Box>
  );
};

export default WorkExperience;
