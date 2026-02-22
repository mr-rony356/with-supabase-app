import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="border-0 bg-white shadow-md transition-shadow hover:shadow-lg">
      <CardContent className="flex flex-col items-center p-5 text-center sm:p-6 md:p-8">
        <div className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-light-mint/50 text-mint-green sm:mb-4 sm:h-14 sm:w-14 md:h-16 md:w-16">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
        </div>
        <h3 className="mb-1.5 text-base font-semibold text-body-text sm:mb-2 sm:text-lg">{title}</h3>
        <p className="text-xs text-body-text/80 sm:text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
