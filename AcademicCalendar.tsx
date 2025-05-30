import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AcademicCalendar = () => {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">Add Calendar Event</h2>
        <Input placeholder="Event Title" />
        <Input type="date" />
        <Textarea placeholder="Description (e.g. exam period, holiday)" />
        <Button>Add Event</Button>
      </CardContent>
    </Card>
  );
};

export default AcademicCalendar;

