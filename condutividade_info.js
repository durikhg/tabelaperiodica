const condutividades = [
  {
    numero: "1",
    condutividadeTermica: "0.1805 W/m·K",
    condutividadeEletrica: "Desconhecido",
    resistividadeEletrica: "Desconhecido",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Desconhecido"
  },
  {
    numero: "2",
    condutividadeTermica: "0.1513 W/m·K",
    condutividadeEletrica: "Isolante",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Gás nobre",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "3",
    condutividadeTermica: "84.8 W/m·K",
    condutividadeEletrica: "Boa",
    resistividadeEletrica: "9.28×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "4",
    condutividadeTermica: "200 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "4.00×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "5",
    condutividadeTermica: "27 W/m·K",
    condutividadeEletrica: "Semicondutor",
    resistividadeEletrica: "1.0×10⁶ Ω·m",
    comportamentoCondutor: "Semimetal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "6",
    condutividadeTermica: "Diamond: 1000 W/m·K, Graphite: 119–165 W/m·K",
    condutividadeEletrica: "Diamond: isolante, Graphite: condutor",
    resistividadeEletrica: "Graphite: ~3×10⁻⁵ Ω·m",
    comportamentoCondutor: "Variável",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Baixa (grafite)"
  },
  {
    numero: "7",
    condutividadeTermica: "0.02583 W/m·K",
    condutividadeEletrica: "Isolante",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "8",
    condutividadeTermica: "0.02658 W/m·K",
    condutividadeEletrica: "Isolante",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Sim (em alta pressão)",
    resistividadeTermica: "Alta"
  },
  {
    numero: "9",
    condutividadeTermica: "0.0277 W/m·K",
    condutividadeEletrica: "Isolante",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "10",
    condutividadeTermica: "0.0491 W/m·K",
    condutividadeEletrica: "Isolante",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Gás nobre",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "11",
    condutividadeTermica: "142 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "4.9×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "12",
    condutividadeTermica: "156 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "4.45×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "13",
    condutividadeTermica: "237 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "2.82×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "14",
    condutividadeTermica: "149 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "6.40×10⁴ Ω·m",
    comportamentoCondutor: "Semicondutor",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Moderada"
  },
  {
    numero: "15",
    condutividadeTermica: "0.235 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "16",
    condutividadeTermica: "0.205 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
   {
    numero: "17",
    condutividadeTermica: "0.0089 W/m·K",
    condutividadeEletrica: "Isolante",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "18",
    condutividadeTermica: "0.01772 W/m·K",
    condutividadeEletrica: "Isolante",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Gás nobre",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "19",
    condutividadeTermica: "102.5 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "7.3×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "20",
    condutividadeTermica: "201 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "3.36×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "21",
    condutividadeTermica: "15.8 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "6.29×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Média"
  },
  {
    numero: "22",
    condutividadeTermica: "21.9 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "4.2×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim (abaixo de 0.4 K)",
    resistividadeTermica: "Média"
  },
  {
    numero: "23",
    condutividadeTermica: "30.7 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "2.56×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "24",
    condutividadeTermica: "93.9 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "1.25×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "25",
    condutividadeTermica: "7.8 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "1.44×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "26",
    condutividadeTermica: "80.2 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "9.71×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim (abaixo de 1.1 K)",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "27",
    condutividadeTermica: "100 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "6.24×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "28",
    condutividadeTermica: "90.9 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "6.99×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "29",
    condutividadeTermica: "401 W/m·K",
    condutividadeEletrica: "Muito alta",
    resistividadeEletrica: "1.68×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim (em certos compostos)",
    resistividadeTermica: "Muito baixa"
  },
  {
    numero: "30",
    condutividadeTermica: "116 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "5.9×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "31",
    condutividadeTermica: "40.6 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.3×10⁻⁷ Ω·m",
    comportamentoCondutor: "Semimetal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Média"
  },
  {
    numero: "32",
    condutividadeTermica: "60.2 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "4.6×10⁻¹ Ω·m",
    comportamentoCondutor: "Semicondutor",
    comportamentoSupercondutor: "Sim (em algumas formas)",
    resistividadeTermica: "Moderada"
  },
  {
    numero: "33",
    condutividadeTermica: "50 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.0×10⁻⁴ Ω·m",
    comportamentoCondutor: "Semimetal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Moderada"
  },
  {
    numero: "34",
    condutividadeTermica: "0.52 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "35",
    condutividadeTermica: "0.12 W/m·K",
    condutividadeEletrica: "Isolante",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "36",
    condutividadeTermica: "0.00943 W/m·K",
    condutividadeEletrica: "Isolante",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Gás nobre",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "37",
    condutividadeTermica: "58.2 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "1.35×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "38",
    condutividadeTermica: "35.3 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "1.25×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "39",
    condutividadeTermica: "17.2 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "5.9×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "40",
    condutividadeTermica: "22.7 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "4.2×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "41",
    condutividadeTermica: "53.7 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "1.43×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "42",
    condutividadeTermica: "138 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "5.34×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim (abaixo de 0.92 K)",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "43",
    condutividadeTermica: "50.6 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.3×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "44",
    condutividadeTermica: "117 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "7.1×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "45",
    condutividadeTermica: "150 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "4.3×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim (alta pressão)",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "46",
    condutividadeTermica: "71.8 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "1.05×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "47",
    condutividadeTermica: "429 W/m·K",
    condutividadeEletrica: "Muito alta",
    resistividadeEletrica: "1.59×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Muito baixa"
  },
  {
    numero: "48",
    condutividadeTermica: "96.6 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "6.83×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "49",
    condutividadeTermica: "81.8 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "8.37×10⁻⁸ Ω·m",
    comportamentoCondutor: "Semimetal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Média"
  },
  {
    numero: "50",
    condutividadeTermica: "66.8 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.09×10⁻⁷ Ω·m",
    comportamentoCondutor: "Semimetal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "51",
    condutividadeTermica: "24.4 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "3.3×10⁻⁷ Ω·m",
    comportamentoCondutor: "Semimetal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "52",
    condutividadeTermica: "2.35 W/m·K",
    condutividadeEletrica: "Muito baixa",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "53",
    condutividadeTermica: "0.449 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "54",
    condutividadeTermica: "0.00565 W/m·K",
    condutividadeEletrica: "Isolante",
    resistividadeEletrica: "Muito alta",
    comportamentoCondutor: "Gás nobre",
    comportamentoSupercondutor: "Sim (abaixo de 0.0001 K)",
    resistividadeTermica: "Alta"
  },
  {
    numero: "55",
    condutividadeTermica: "35.9 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "2.1×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Média"
  },
  {
    numero: "56",
    condutividadeTermica: "18.4 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "3.3×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "72",
    condutividadeTermica: "23 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "3.31×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "73",
    condutividadeTermica: "57.5 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "1.31×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "74",
    condutividadeTermica: "173 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "5.65×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim (alta pressão)",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "75",
    condutividadeTermica: "48 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "1.9×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "76",
    condutividadeTermica: "87.6 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "8.3×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "77",
    condutividadeTermica: "147 W/m·K",
    condutividadeEletrica: "Muito alta",
    resistividadeEletrica: "4.7×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Muito baixa"
  },
  {
    numero: "78",
    condutividadeTermica: "71.6 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "1.06×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "79",
    condutividadeTermica: "318 W/m·K",
    condutividadeEletrica: "Muito alta",
    resistividadeEletrica: "2.44×10⁻⁸ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Muito baixa"
  },
  {
    numero: "80",
    condutividadeTermica: "8.3 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "9.58×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal líquido (à temperatura ambiente)",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "81",
    condutividadeTermica: "46.1 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.32×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Média"
  },
  {
    numero: "82",
    condutividadeTermica: "35.3 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "2.0×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "83",
    condutividadeTermica: "7.97 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "1.2×10⁻⁶ Ω·m",
    comportamentoCondutor: "Semimetal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "84",
    condutividadeTermica: "6.8 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "Alta",
    comportamentoCondutor: "Semimetal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "85",
    condutividadeTermica: "0.017 W/m·K (estimada)",
    condutividadeEletrica: "Muito baixa",
    resistividadeEletrica: "Muito alta",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "86",
    condutividadeTermica: "0.00361 W/m·K",
    condutividadeEletrica: "Isolante",
    resistividadeEletrica: "Muito alta",
    comportamentoCondutor: "Gás nobre",
    comportamentoSupercondutor: "Sim (abaixo de 0.0002 K)",
    resistividadeTermica: "Alta"
  },
  {
    numero: "87",
    condutividadeTermica: "15 W/m·K (estimada)",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "Alta (estimada)",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Alta"
  },
  {
    numero: "88",
    condutividadeTermica: "19 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "3.2×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
    {
    numero: "104",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "105",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "106",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "107",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "108",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "109",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "110",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "111",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "112",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "113",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "114",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "115",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "116",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "117",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Não metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "118",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Gás nobre",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "57",
    condutividadeTermica: "13.4 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "6.9×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "58",
    condutividadeTermica: "11.3 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "8.4×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Alta"
  },
  {
    numero: "59",
    condutividadeTermica: "12.5 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "7.0×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Alta"
  },
  {
    numero: "60",
    condutividadeTermica: "16.5 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "6.2×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "61",
    condutividadeTermica: "17.9 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.3×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "62",
    condutividadeTermica: "13.2 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "1.43×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "63",
    condutividadeTermica: "13.2 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "1.29×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "64",
    condutividadeTermica: "10.6 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "1.82×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Alta"
  },
  {
    numero: "65",
    condutividadeTermica: "10.6 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "1.22×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Alta"
  },
  {
    numero: "66",
    condutividadeTermica: "10.7 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "1.12×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "67",
    condutividadeTermica: "10.7 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "1.31×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não",
    resistividadeTermica: "Alta"
  },
  {
    numero: "68",
    condutividadeTermica: "11.0 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "1.34×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Alta"
  },
  {
    numero: "69",
    condutividadeTermica: "16.9 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.16×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "70",
    condutividadeTermica: "34.9 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.80×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "71",
    condutividadeTermica: "16.4 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "4.9×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "89",
    condutividadeTermica: "12.1 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "6.0×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Alta"
  },
  {
    numero: "90",
    condutividadeTermica: "11.0 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.3×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "91",
    condutividadeTermica: "17.9 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "2.0×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Média"
  },
  {
    numero: "92",
    condutividadeTermica: "27.5 W/m·K",
    condutividadeEletrica: "Alta",
    resistividadeEletrica: "2.5×10⁻⁷ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Baixa"
  },
  {
    numero: "93",
    condutividadeTermica: "6.3 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "1.30×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Alta"
  },
  {
    numero: "94",
    condutividadeTermica: "6.7 W/m·K",
    condutividadeEletrica: "Baixa",
    resistividadeEletrica: "1.5×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Sim",
    resistividadeTermica: "Alta"
  },
  {
    numero: "95",
    condutividadeTermica: "10.0 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.25×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Alta"
  },
  {
    numero: "96",
    condutividadeTermica: "10.6 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.3×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Alta"
  },
  {
    numero: "97",
    condutividadeTermica: "10.0 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.2×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Alta"
  },
  {
    numero: "98",
    condutividadeTermica: "10.0 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.2×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Alta"
  },
  {
    numero: "99",
    condutividadeTermica: "10.0 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.2×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Alta"
  },
  {
    numero: "100",
    condutividadeTermica: "10.0 W/m·K",
    condutividadeEletrica: "Moderada",
    resistividadeEletrica: "1.2×10⁻⁶ Ω·m",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Alta"
  },
  {
    numero: "101",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "102",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  },
  {
    numero: "103",
    condutividadeTermica: "Desconhecida",
    condutividadeEletrica: "Desconhecida",
    resistividadeEletrica: "Desconhecida",
    comportamentoCondutor: "Metal",
    comportamentoSupercondutor: "Não conhecido",
    resistividadeTermica: "Desconhecida"
  }

];
