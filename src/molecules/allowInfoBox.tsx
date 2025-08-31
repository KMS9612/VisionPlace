import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";

interface TableDataProps {
  title: string;
  tableHead: string[];
  tableBody: TableBody[];
}

interface TableBody {
  bTarget: string;
  bPurpose: string;
  bDate: string;
  bTargetCountry?: string;
  bTargetInfo?: string;
}

interface AllowInfoBoxProps {
  tableData: TableDataProps;
}

export default function AllowInfoBox(props: AllowInfoBoxProps) {
  const { tableData } = props;

  return (
    <Dialog>
      <DialogTrigger>
        <ChevronRight className="cursor-pointer hover:text-gray-900 text-gray-500"></ChevronRight>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{tableData.title}</DialogTitle>
        </DialogHeader>
        <table>
          <thead>
            <tr>
              {tableData.tableHead.map((headValue) => (
                <th key={headValue} className="border-2 text-sm">
                  {headValue}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.tableBody.map((bodyValue) => (
              <tr key={bodyValue.bTarget}>
                <th className="border-2 text-sm">{bodyValue.bTarget}</th>
                {bodyValue.bTargetCountry ? (
                  <th className="border-2 text-sm">
                    {bodyValue.bTargetCountry}
                  </th>
                ) : (
                  ""
                )}
                {bodyValue.bTargetInfo ? (
                  <th className="border-2 text-sm">{bodyValue.bTargetInfo}</th>
                ) : (
                  ""
                )}
                <td className="border-2 text-sm">{bodyValue.bPurpose}</td>
                <td className="border-2 text-sm text-center">
                  {bodyValue.bDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-gray-500 text-xs">
          전자상거래법 소비자보호에 관한 법률에 의해 소비자 불만 또는 분쟁처리에
          관한 기록을 위해 이름, 전화번호, 상담요청내용은
          상담신청시점(DB등록시점)으로부터 3년간 보관됩니다.
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">닫기</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
