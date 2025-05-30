import React, { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import CourseManagement from "./CourseManagement";
import ClassScheduling from "./ClassScheduling";
import AssessmentManagement from "./AssessmentManagement";
import AcademicCalendar from "./AcademicCalendar";

const AcademicProgramPlanner = () => {
  const [activeTab, setActiveTab] = useState("course");

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Academic Program Planner</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger value="course">Course Management</TabsTrigger>
          <TabsTrigger value="schedule">Class Scheduling</TabsTrigger>
          <TabsTrigger value="assessment">Assessment Management</TabsTrigger>
          <TabsTrigger value="calendar">Academic Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="course">
          <CourseManagement />
        </TabsContent>

        <TabsContent value="schedule">
          <ClassScheduling />
        </TabsContent>

        <TabsContent value="assessment">
          <AssessmentManagement />
        </TabsContent>

        <TabsContent value="calendar">
          <AcademicCalendar />
        </TabsContent>
      </Tabs>
    </div>
  );
};


export default AcademicProgramPlanner;

