import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CourseManagement = () => {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">Create New Course</h2>
        <Input placeholder="Course Name" />
        <Textarea placeholder="Course Description" />
        <Input placeholder="Subject List (comma-separated)" />
        <Button>Create Course</Button>
      </CardContent>
    </Card>
  );
};

export default CourseManagement;

