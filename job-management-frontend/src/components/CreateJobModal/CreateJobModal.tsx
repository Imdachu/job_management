import {
  Modal,
  TextInput,
  Select,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  NumberInput,
  Grid,
  Input,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm, Controller } from "react-hook-form";
import { IconChevronDown, IconArrowRight } from "@tabler/icons-react";

// Defines the structure of our form data
type JobFormData = {
  jobTitle: string;
  companyName: string;
  location: string;
  jobType: string;
  salaryMin: number | "";
  salaryMax: number | "";
  applicationDeadline: Date | null;
  jobDescription: string;
};

interface CreateJobModalProps {
  opened: boolean;
  close: () => void;
  refetchJobs: () => void;
}

// Styles meticulously calibrated to match the refined Figma screenshot
const formInputStyles = {
  label: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#222222",
    marginBottom: "12px",
  },
  input: {
    height: "48px",
    borderRadius: "8px",
    border: "1.5px solid #E5E5E5",
    fontSize: "16px",
    "::placeholder": {
      color: "#686868",
    },
    // Focus style moved to CSS class
  },
};

export function CreateJobModal({
  opened,
  close,
  refetchJobs,
}: CreateJobModalProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<JobFormData>();

  // This function now sends the data to our NestJS backend API
  const onSubmit = async (data: JobFormData) => {
    try {
      const response = await fetch("http://localhost:3001/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          salaryMin: Number(data.salaryMin),
          salaryMax: Number(data.salaryMax),
        }),
      });

      if (response.ok) {
        console.log("Job created successfully!");
        refetchJobs(); // Refresh the job list on the main page
        close(); // Close the modal
        reset(); // Clear the form for the next time it opens
      } else {
        const errorData = await response.json();
        console.error("Failed to create job:", errorData);
        // In a real app, you would show an error message to the user here
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={
        <span
          style={{
            fontWeight: 700,
            fontSize: 24,
            letterSpacing: -0.5,
            color: "#222",
          }}
        >
          Create Job Opening
        </span>
      }
      centered
      size="848px"
      radius="16px"
      styles={{
        content: {
          minHeight: "779px",
          display: "flex",
          flexDirection: "column",
        },
        header: {
          position: "relative",
          justifyContent: "center",
          paddingTop: "32px", // Add top padding to move title down
          paddingBottom: "32px",
          alignItems: "center",
        },
        body: {
          padding: "0px 40px 40px 40px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginTop: "8px", // Add margin to move content down
        },
        title: {
          textAlign: "center",
          width: "100%",
        },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Top 4 inputs */}
        <SimpleGrid cols={2} spacing="24px" mb="32px">
          <TextInput
            label="Job Title"
            placeholder="Full Stack Developer"
            styles={formInputStyles}
            {...register("jobTitle", { required: "Job title is required" })}
            error={errors.jobTitle?.message}
          />
          <TextInput
            label="Company Name"
            placeholder="Amazon, Microsoft, Swiggy"
            styles={formInputStyles}
            {...register("companyName", {
              required: "Company name is required",
            })}
            error={errors.companyName?.message}
          />
          <Controller
            name="location"
            control={control}
            rules={{ required: "Location is required" }}
            render={({ field }) => (
              <Select
                label="Location"
                placeholder="Choose Preferred Location"
                data={["Chennai", "Mumbai", "Bengaluru", "Remote"]}
                styles={formInputStyles}
                error={errors.location?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="jobType"
            control={control}
            rules={{ required: "Job type is required" }}
            render={({ field }) => (
              <Select
                label="Job Type"
                placeholder="FullTime"
                data={["Full-time", "Part-time", "Contract", "Internship"]}
                styles={formInputStyles}
                error={errors.jobType?.message}
                {...field}
              />
            )}
          />
        </SimpleGrid>

        {/* Salary and Deadline row */}
        <Grid gutter="24px" mb="32px">
          <Grid.Col span={6}>
            <Input.Label style={formInputStyles.label}>
              Salary Range
            </Input.Label>
            <Group grow>
              <Controller
                name="salaryMin"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    leftSection="₹"
                    styles={{ input: formInputStyles.input }}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={errors.salaryMin?.message}
                  />
                )}
              />
              <Controller
                name="salaryMax"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    leftSection="₹"
                    placeholder="12,00,000"
                    thousandSeparator=","
                    styles={{ input: formInputStyles.input }}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={errors.salaryMax?.message}
                  />
                )}
              />
            </Group>
          </Grid.Col>
          <Grid.Col span={6}>
            <Controller
              name="applicationDeadline"
              control={control}
              rules={{ required: "Deadline is required" }}
              render={({ field }) => (
                <DatePickerInput
                  label="Application Deadline"
                  placeholder="Select a date"
                  styles={formInputStyles}
                  error={errors.applicationDeadline?.message}
                  {...field}
                />
              )}
            />
          </Grid.Col>
        </Grid>

        {/* Job Description */}
        <Textarea
          label="Job Description"
          placeholder="Please share a description to let the candidate know more about the job role"
          mb="40px"
          styles={{
            label: formInputStyles.label,
            // This 'input' object applies the exact dimensions from your specs
            input: {
              ...formInputStyles.input,
              height: "169px",
              borderRadius: "10px",
              border: "1px solid #BCBCBC",
              paddingTop: "16px",
              paddingLeft: "16px",
            },
          }}
          {...register("jobDescription")}
          style={{ flex: 1 }} // Allows the textarea to grow and fill space
        />

        {/* Buttons - Corrected Layout */}
        <Group justify="space-between" mt="auto">
          <Button
            variant="default"
            size="md"
            rightSection={<IconChevronDown size={16} />}
          >
            Save Draft
          </Button>
          <Button
            type="submit"
            size="md"
            rightSection={<IconArrowRight size={16} />}
          >
            Publish
          </Button>
        </Group>
      </form>
    </Modal>
  );
}
