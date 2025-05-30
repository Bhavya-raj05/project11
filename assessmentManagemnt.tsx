import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AssessmentManagement = () => {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">Create Assessment</h2>
        <Input placeholder="Assessment Title" />
        <Textarea placeholder="Instructions or Questions" />
        <Input placeholder="Grading Scheme" />
        <Button>Create Assessment</Button>
      </CardContent>
    </Card>
  );
};

export default AssessmentManagement;

