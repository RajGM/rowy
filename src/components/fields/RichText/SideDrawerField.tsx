import { ISideDrawerFieldProps } from "@src/components/fields/types";
import RichTextEditor from "@src/components/RichTextEditor";
import { getFieldId } from "@src/components/SideDrawer/utils";


//experiment
import config from ".";
import { Typography, Tooltip } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";


export default function RichText({
  column,
  value,
  onChange,
  onSubmit,
  disabled,
}: ISideDrawerFieldProps) {
  return ( 
      <RichTextEditor
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onSubmit}
        id={getFieldId(column.key)}
        fullScreenTitle={
          <>
            {config.icon}
  
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              {column.name}
            </Typography>
  
            {column.hidden && (
              <Tooltip title="Hidden in your table view">
                <VisibilityOffIcon color="action" />
              </Tooltip>
            )}
            {disabled && (
              <Tooltip title="Locked by ADMIN">
                <LockIcon color="action" />
              </Tooltip>
            )}
          </>
        }
      />
  );
}
