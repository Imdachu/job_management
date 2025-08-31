import { Card, Text, Button, Group, Badge, Avatar, Box } from "@mantine/core";
import { Job } from "@/types/job";
import { IconBriefcase, IconMapPin, IconCoin } from "@tabler/icons-react";

// Helper function to format a large salary number into a short "LPA" string
const formatSalaryToLPA = (salary: number) => {
  if (!salary) return "N/A";
  const lakhs = salary / 100000;
  return `${lakhs}LPA`;
};

// The props now directly match the data coming from our backend API
export function JobCard({ job }: { job: Job }) {
  const { jobTitle, companyName, location, jobDescription, salaryMax } = job;

  // Since the form doesn't collect "experience", we use a placeholder to match the design.
  const experience = "1-3 yr Exp";

  return (
    <Card
      shadow="sm"
      p="lg"
      radius="12px"
      withBorder
      style={{
        width: "316px",
        height: "360px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0px 0px 14px 0px #D3D3D326",
      }}
    >
      <div>
        <Group justify="space-between" mb="md">
          <Avatar color="violet" radius="md" size={66}>
            {companyName.charAt(0).toUpperCase()}
          </Avatar>
          <Badge
            size="lg"
            radius="10px"
            style={{
              backgroundColor: "#B0D9FF",
              color: "#000000",
              fontWeight: 500,
              fontSize: "14px",
              height: "33px",
            }}
          >
            24h Ago
          </Badge>
        </Group>

        <Text fw={700} size="20px" c="#000000" mb="sm" tt="capitalize" truncate>
          {jobTitle}
        </Text>

        <Group gap="16px" mb="md">
          <Group gap={4} align="center">
            <IconBriefcase size={18} color="#5A5A5A" />
            <Text size="16px" fw={500} c="#5A5A5A">
              {experience}
            </Text>
          </Group>
          <Group gap={4} align="center">
            <IconMapPin size={18} color="#5A5A5A" />
            <Text size="16px" fw={500} c="#5A5A5A">
              {location}
            </Text>
          </Group>
          <Group gap={4} align="center">
            <IconCoin size={18} color="#5A5A5A" />
            <Text size="16px" fw={500} c="#5A5A5A">
              {formatSalaryToLPA(salaryMax)}
            </Text>
          </Group>
        </Group>

        {/* THIS IS THE CORRECTED SECTION */}
        <Box w={300} h={76} pr={12}>
          <Text
            size="14px"
            fw={500}
            c="#555555"
            lineClamp={3} // Allows up to 3 lines before showing "..."
          >
            {jobDescription}
          </Text>
        </Box>
        {/* END OF CORRECTION */}
      </div>

      <Button
        fullWidth
        mt="md"
        size="lg"
        radius="10px"
        style={{ backgroundColor: "#00AAFF" }}
      >
        Apply Now
      </Button>
    </Card>
  );
}
