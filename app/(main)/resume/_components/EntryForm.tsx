import { entrySchema } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const EntryForm = ({type,entries,onChange}) => {

    
  const {
    control,
    register,
    handleSubmit: handleValidation,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(entrySchema),
    defaultValues: {
      title: "",
      organization: "",
      startDate: "",
      endDate: "",
      description: "",
      current: false,
    },
  });
  const current=watch("current")
  return <div>EntryForm</div>;
};
export default EntryForm;
