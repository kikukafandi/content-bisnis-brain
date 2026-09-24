---
title: "STM32 UART Tutorial: Configure & Transmit Data (HAL)"
source: "https://controllerstech.com/stm32-uart-1-configure-uart-transmit-data/"
author:
  - "[[Arun Rawat]]"
published: 2023-12-28
created: 2026-09-09
description: "Learn how to configure UART on STM32 using CubeMX and transmit strings and numbers in blocking mode with HAL. Covers baud rate, frame format, hardware setup, and serial monitor output."
tags:
  - "clippings"
---
[Home](https://controllerstech.com/) ▸ [STM32 Tutorials](https://controllerstech.com/category/stm32/) ▸ [STM32 UART Series](https://controllerstech.com/category/stm32/stm32-uart-series/) ▸

## STM32 UART: Configure & Transmit Data in Blocking Mode

UART is how STM32 talks to the outside world — it’s the first thing you configure when debugging a new board, connecting a GPS or Bluetooth module, or logging sensor data to a PC. Two wires, no clock, and a handful of HAL function calls get you up and running.

This is Part 1 of the **[STM32 UART series](https://controllerstech.com/stm32-hal/peripherals/uart-tutorials/)**. It covers everything needed to send data from STM32 to a serial monitor in blocking mode: configuring UART in CubeMX, connecting the hardware (both Nucleo/Discovery boards with built-in VCP and boards that need an FT232 adapter), and transmitting strings and numbers via `HAL_UART_Transmit()`. Verified output is shown in a serial terminal.

Blocking mode is the right starting point — simple, predictable, no callbacks to manage. Once this works, Part 2 covers transmitting via interrupt and DMA to free the CPU during transmission.

This is the first tutorial in the **[STM32 UART Series](https://controllerstech.com/stm32-hal/peripherals/uart-tutorials/)**. You can access the other tutorials of this series here:

- [Transmit using Interrupt & DMA](https://controllerstech.com/stm32-uart-2-use-interrupt-dma-to-transmit-data/)
- [Receive using Blocking & Interrupt Mode](https://controllerstech.com/stm32-uart-3-receive-data-in-blocking-interrupt-mode/)
- [Receive Data using DMA](https://controllerstech.com/stm32-uart-4-receive-data-using-dma/)
- [UART Idle Line (Interrupt & DMA)](https://controllerstech.com/stm32-uart-5-receive-data-using-idle-line/)
- [Half Duplex Communication](https://controllerstech.com/stm32-uart-6-communication-using-single-wire/)
![How to Configure UART & Transmit Data in STM32](https://controllerstech.com/wp-content/uploads/2023/12/stm32_uart_N_Thumb.webp)

How to Configure UART & Transmit Data in STM32

## STM32 UART: How It Works

The UART (Universal Asynchronous Receiver/Transmitter) peripheral in STM32 microcontrollers provides a simple and efficient way to perform serial communication. It allows data exchange between the microcontroller and other devices such as PCs, GPS modules, Bluetooth modules, or other microcontrollers using standard asynchronous protocols.

UART communication is asynchronous, meaning it doesn’t require a separate clock line—only TX (Transmit) and RX (Receive) lines are used. STM32 MCUs often provide multiple UART/USART interfaces, and they can be configured using STM32CubeMX and HAL libraries to suit different baud rates, word lengths, parity, and stop bits.

STM32 supports both UART and USART peripherals, where USART adds synchronous mode (with a clock line) in addition to asynchronous UART mode.

### Features of STM32 UART:

1. **Configurable Baud Rate**  
	Supports a wide range of baud rates (e.g., 9600 to 1+ Mbps), allowing flexible communication speed based on the application.
2. **Full-Duplex Communication**  
	Simultaneously sends and receives data through separate TX and RX lines.
3. **Interrupt and DMA Support**  
	UART can be operated in polling, interrupt-driven, or DMA mode for efficient, low-latency data handling.
4. **Flexible Frame Format**  
	Supports custom configurations like 8/9 data bits, 1/2 stop bits, and optional parity for error checking.

---

### UART vs USART

UART stands for **U** niversal **A** synchronous **R** eceiver **T** ransmitter whereas the USART stands for **U** niversal **S** ynchronous **A** synchronous **R** eceiver **T** ransmitter. The term Synchronous enables the USART to send an additional clock signal to the receiving device. The data is then sampled at a predefined edge (Rising or Falling) of the clock. The USART mode uses 3 pins (clock, Tx and Rx) compared to the 2 pins (Tx and Rx) used in the UART.

The most widely used synchronous communications are I2C, SPI, etc. The USART, in a way, can act as the SPI master to send the data to the slave. The synchronous communication is also used when communicating with a smart card.

The table below shows the comparison between UART and USART in STM32.

| Feature | **UART** | **USART** |
| --- | --- | --- |
| Full Form | Universal Asynchronous Receiver Transmitter | Universal Synchronous/Asynchronous Receiver Transmitter |
| Communication Type | Asynchronous only | Supports both Synchronous and Asynchronous |
| Clock Signal | Not used | Uses an additional clock line in synchronous mode |
| Number of Pins Used | 2 (TX and RX) | 3 in synchronous mode (TX, RX, and CLK) |
| Data Sampling | Based on start and stop bits (internal clock) | Data is sampled on the rising or falling edge of external clock |
| Application Example | Basic serial communication with PCs, Bluetooth modules | Smartcard communication, SPI-like data transfers |
| Acts Like SPI Master? | No | Yes, in synchronous mode |
| Use of Start/Stop Bits | Required for data framing | Optional in synchronous mode |

We will use the UART for the major part of this series as it has wider applications compared to the USART.

---

### Why use UART in STM32 projects

UART is very useful in STM32 projects because it is simple, reliable, and supported by many devices. You can use UART to:

- Send debug messages to a serial terminal on your PC
- Connect STM32 to modules like GPS, GSM, or Bluetooth
- Transfer sensor data to another microcontroller
- Communicate with external devices without complex wiring

Another reason to use UART is that it works with only two wires: TX (transmit) and RX (receive). This makes hardware connections easy. Also, STM32 HAL provides ready-to-use functions like `HAL_UART_Transmit`, so you can start sending data with just a few lines of code.

## STM32 UART Hardware & CubeMX Setup

### Boards with Virtual COM Port

We will use the STM32 MCU to send the data to the computer. Some of the Nucleo and Discovery dev boards from ST supports the virtual com port. This feature enables the USB connected for the ST-link to be also used for the data transmission between the MCU and the computer.

The Virtual Com Port is supported by many Nucleo and Discovery boards but not all. You need to check the schematic of the board to confirm whether the respective board supports it.

Below are the images from the schematic of the Nucleo F446RE and Discovery F412.

![STM32 F4 Nucleo UART Schematic](https://controllerstech.com/wp-content/uploads/2023/12/uart1_1.webp)

Nucleo F446

![STM32 Discovery F412 UART Schematic](https://controllerstech.com/wp-content/uploads/2023/12/uart1_2.webp)

Discovery F412

As you can see in the images above, both Nucleo F446RE and Discovery F412 supports the USB Virtual Com Port. So if you are using either of these boards, you do not need to use an additional module to communicate to the computer. The USB used for the ST link can also be used for the communication.

---

### Boards Without Virtual COM Port (FT232 Module)

Not all the boards support this Virtual Com port feature. Below is the image from the schematic of the very famous STM32F4 Discovery board.

![STM32F4 Discovery UART Schematic](https://controllerstech.com/wp-content/uploads/2023/12/uart1_3.webp)

STM32F4 Discovery

As you can see in the image above, there is no virtual com port in the F4 Discovery board. In such cases we can use some module to convert the UART signals to the USB, which is connected to the computer.

*The image below* shows the connection between the MCU and the FT232 USB to UART converter.

![STM32 FT232 UART Connection](https://controllerstech.com/wp-content/uploads/2023/12/uart1_4.webp)

STM32 FT232 UART Connection

The UART is always connected in the cross connection, connecting the TX pin of the MCU to the RX of the device and the RX to the TX of the device. The module then connects to the computer using the USB.

---

### CubeMX UART Configuration

*The image below* shows the UART configuration in CubeMX.

![STM32 UART Configuration in CubeMX](https://controllerstech.com/wp-content/uploads/2023/12/uart1_5.webp)

STM32 UART Configuration in CubeMX

We will use the Asynchronous Mode for the communication. Only 2 pins are used in the Asynchronous mode, TX and RX. The baud rate is set to 115200. We need to use the same baud rate for the receiver device also.

Word length consists of the data bits and the parity bit. STM32 supports different word lengths of 7 bits, 8 bits and 9 bits. A typical UART frame is shown in the image below.

![UART Data Format](https://controllerstech.com/wp-content/uploads/2023/12/uart1_6.webp)

UART Data Format

The frame consists of a start bit, data bits and stop bits. we are using 8 data bits with no parity bit and 1 stop bit. We need to use the same configuration in the receiver device also. The data direction is set to Receive and Transmit.

The oversampling is used to increase the tolerance of the receiver to the clock deviation. But it also reduces the maximum baud rate the device can achieve. The image below explains the oversampling and max baud rate.

![UART Oversampling](https://controllerstech.com/wp-content/uploads/2023/12/uart1_7.webp)

UART Oversampling

This is all the configuration we need to do in the cubeMX. Let’s see the code now.

## STM32 UART Transmit: Code & Results

We can only send the ascii characters via the UART. Below we will see how to send a simple string and a number, by converting it to the character format.

### Sending a String via UART

We can directly send a string via the UART. The code below sends the string every 1 second.

```
uint8_t data[] = "Hello world\n"; 
int main()
{
  ....
   while (1)
   {
     HAL_UART_Transmit(&huart2, data, 12, 1000); HAL_Delay(1000);
   }
}
```

```
uint8_t data[] = "Hello world\n"; 
int main()
{
  ....
   while (1)
   {
     HAL_UART_Transmit(&huart2, data, 12, 1000); HAL_Delay(1000);
   }
}
```

Here we define an array (data) which contains the string to be sent to the UART. Then call the function `HAL_UART_Transmit` in the while loop every 1 second.

The parameters of the function are as follows:

- @UART Instance, **huart2**
- @pointer to the data array, **data**
- @size of the data in bytes, **12**
- @timout in case of error, **1000ms**

---

### Sending a Number via UART

As I mentioned we can not send the number directly to the UART. It only transmits the data in the ascii format. To send the number, we first need to convert each digit of the number to the character format and then send the data to the UART.

```
#include <stdio.h>
uint8_t number = 123;
uint8_t numarray[4];
int main()
{
 ....
 while (1)
 {
   sprintf(numarray, "%d\n", number);
   HAL_UART_Transmit(&huart1, numarray, 4, 1000);
   HAL_Delay(1000);
 }
}
```

```
#include <stdio.h>
uint8_t number = 123;
uint8_t numarray[4];
int main()
{
 ....
 while (1)
 {
   sprintf(numarray, "%d\n", number);
   HAL_UART_Transmit(&huart1, numarray, 4, 1000);
   HAL_Delay(1000);
 }
}
```

Here we will send the number 123 to the UART. We first need to define an array of size at least the number of digits of the number.

The `sprintf` function is used to convert the number to the character format. The format specifier, **%d**, is used to convert the integral value (123).

After conversion the characters are stored in the array, `numarray`. We send this array to the UART every 1 second.

---

### Serial Console Configuration & Results

The Serial console on the computer should have the same configuration as we did for the STM32 in the cubeMX. The image below shows the configuration with the baud rate of 115200, 8 data bits with 1 stop bit and no parity.

![UART Serial Console configuration to see the output](https://controllerstech.com/wp-content/uploads/2023/12/uart1_8.webp)

UART Serial Console configuration to see the output

The data sent by the STM32 is received in the serial console. The image below shows the data, “Hello world”, printed several times. It was sent every 1 second by the MCU.

![String received by Serial Console via UART](https://controllerstech.com/wp-content/uploads/2023/12/uart1_9.webp)

String received by Serial Console via UART

We also sent the number to the UART. The image below shows the number output on the console.

![Numbers received by Serial Console via UART](https://controllerstech.com/wp-content/uploads/2023/12/uart1_10.webp)

Numbers received by Serial Console via UART

STM32 UART Configure & Transmit — Video Tutorial

This video walks through the complete UART setup on STM32 — selecting UART mode in CubeMX, setting baud rate and frame format, connecting the hardware using Virtual COM Port or an FT232 adapter, writing HAL code to transmit a string and a number, and verifying output in a serial monitor.

![](https://www.youtube.com/watch?v=KdXSRyPCYuM)

## STM32 UART — Frequently Asked Questions

**Why does my `HAL_UART_Transmit()` return HAL\_OK but nothing appears on the serial monitor?**

The most common causes are: baud rate mismatch between STM32 and the serial monitor (both must be exactly 115200 — check the serial monitor's port settings), the TX pin is not connected to the correct RX pin on the USB-to-TTL adapter (remember the cross-connection: STM32 TX → adapter RX, STM32 RX → adapter TX), or the wrong COM port is selected in the serial monitor. If you are using a Nucleo with Virtual COM Port, confirm the USB cable is connected to the ST-Link port, not a separate USB port.

**What is the byte count argument in `HAL_UART_Transmit()` and what happens if it's wrong?**

The third argument is the number of bytes to transmit. For a string, it must be the exact byte count including any newline character (`\n`). If it is too small, the string is truncated. If it is too large, the function will transmit garbage bytes beyond the string until the count is exhausted. Use `strlen((char*)data)` to calculate it automatically for variable-length strings rather than hardcoding a number.

****Can I use UART communication to send data from STM32 to a PC application?****

Yes, you can connect STM32 to a PC using a USB-to-TTL converter. The data sent over UART can be read by serial monitor tools like PuTTY, RealTerm, or Arduino Serial Monitor.

**********Can I send sensor data over UART in real-time using blocking mode?**********

While it’s possible, blocking mode is not ideal for real-time data logging. It may cause delays in sensor reading. For better performance, consider using UART with interrupt or DMA.

**********Is it necessary to add a delay after each UART transmit call?**********

In most cases, `HAL_UART_Transmit` handles internal timing, so delays aren't required. But in time-sensitive applications or when sending large chunks of data, a small delay may help prevent data overflow or ensure smooth transmission.

### Conclusion

In this tutorial you configured STM32 UART in CubeMX, wired the hardware, and transmitted both strings and numbers to a serial monitor using `HAL_UART_Transmit()` in blocking mode. The key settings to remember are baud rate, word length, stop bits, and parity — both the STM32 and the receiver must match on all four, or you will see garbled output.

Blocking mode works well for debug output and simple data logging where the CPU has nothing urgent to do while transmitting. Its limitation is that `HAL_UART_Transmit()` holds execution until every byte has been shifted out — at 115200 baud, sending 12 bytes takes about 1 ms, which is fine for most uses but becomes a problem in time-critical loops or when transmitting large payloads.

In Part 2 of this series, we cover **[transmitting via interrupt and DMA](https://controllerstech.com/stm32-uart-2-use-interrupt-dma-to-transmit-data/)**, which releases the CPU immediately after starting the transfer and is the correct approach for any application where transmission should not block other work.

Download STM32 UART Blocking Transmit Project Files

Complete CubeIDE project with UART configured in blocking mode — includes string transmit, number-to-char conversion with sprintf, and serial console setup. Free to download — support the work if it helped you.

Open source Blocking Mode (HAL\_UART\_Transmit) CubeMX + HAL source

[![How to use Interrupt & DMA to Transmit Data](https://controllerstech.com/wp-content/uploads/2024/01/stm32uart2_thumb_n.webp)](https://controllerstech.com/stm32-uart-2-use-interrupt-dma-to-transmit-data/)

[![How to Receive UART Data in Blocking & Interrupt mode](https://controllerstech.com/wp-content/uploads/2024/01/stm32uart3_thumb_n.webp)](https://controllerstech.com/stm32-uart-3-receive-data-in-blocking-interrupt-mode/)

[![STM32 UART DMA Receive Example – Normal and Circular Mode Explained](https://controllerstech.com/wp-content/uploads/2024/01/stm32_uart_4_N_Thumb.webp)](https://controllerstech.com/stm32-uart-4-receive-data-using-dma/)

[![STM32 UART: Receive Data Using IDLE Line Detection](https://controllerstech.com/wp-content/uploads/2024/02/stm32uart5idle_thumb.webp)](https://controllerstech.com/stm32-uart-5-receive-data-using-idle-line/)

[![How to Communicate using Single Wire (Half Duplex Mode)](https://controllerstech.com/wp-content/uploads/2024/02/stm32uart6_thumb_n.webp)](https://controllerstech.com/stm32-uart-6-communication-using-single-wire/)

[![How to use one-wire Protocol to interface DS18B20](https://controllerstech.com/wp-content/uploads/2024/02/stm32uart7_thumb_n.webp)](https://controllerstech.com/stm32-uart-7-1-wire-protocol/)