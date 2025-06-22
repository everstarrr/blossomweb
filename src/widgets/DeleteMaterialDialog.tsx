import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const DeleteMaterialDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="ml-16 max-w-xs font-normal text-base"
        >
          Удалить материал
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="h-auto leading-none">Удаление материала</DialogTitle>
          <DialogDescription>
            Вы уверены, что хотите удалить материал “UI-дизайн, UI Kit и
            мудборд” ?
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-6">
          <Button variant="secondary" className="flex-1">Да, удалить</Button>
          <Button className="flex-1">Нет, оставить</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
