// PieChartCard.jsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useMediaQuery,
  Box,
} from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useTheme } from "@mui/material/styles";

// Sample data
const dataOptions = {
  Monthly: [
    { name: "Product A", value: 400 },
    { name: "Product B", value: 300 },
    { name: "Product C", value: 300 },
    { name: "Product D", value: 200 },
  ],
  Weekly: [
    { name: "Product A", value: 30 },
    { name: "Product B", value: 98 },
    { name: "Product C", value: 80 },
    { name: "Product D", value: 60 },
  ],
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Pie_chart = () => {
  const [timeframe, setTimeframe] = useState("Monthly");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <Card sx={{ margin: 2, padding: 2 }}>
      <CardContent>
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems={isMobile ? "flex-start" : "center"}
          mb={2}
        >
          <Typography variant="h6" gutterBottom>
            Sales Distribution
          </Typography>
          <FormControl size="small" sx={{ minWidth: 120, mt: isMobile ? 1 : 0 }}>
            <InputLabel id="timeframe-select-label">View</InputLabel>
            <Select
              labelId="timeframe-select-label"
              id="timeframe-select"
              value={timeframe}
              label="View"
              onChange={handleChange}
            >
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={dataOptions[timeframe]}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={100}
                dataKey="value"
              >
                {dataOptions[timeframe].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Pie_chart;
