import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ResumeAnalyzer from "./ResumeAnalyzer"

const page = () => {
  return (
  
  <Tabs defaultValue="resume" className="w-full p-10">
  <TabsList className='gap-10 '>
    <TabsTrigger value="resume" className=''>AI Resume Analyzer</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="resume"> <ResumeAnalyzer/></TabsContent>
  <TabsContent value="password">Hello.</TabsContent>
</Tabs>
  )
}

export default page
