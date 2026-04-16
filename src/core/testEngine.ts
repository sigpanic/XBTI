import { TestProtocol } from '../protocol/interface';
import type { TestConfig, TestResult } from '../protocol/types';

export class TestEngine {
  private protocol: TestProtocol;

  constructor() {
    this.protocol = new TestProtocol();
  }

  registerTest(test: TestConfig): void {
    this.protocol.registerTest(test);
  }

  startTest(testId: string): void {
    this.protocol.startTest(testId);
  }

  submitAnswer(questionId: string, optionId: string): void {
    this.protocol.submitAnswer(questionId, optionId);
  }

  getResult(): TestResult {
    return this.protocol.getResult();
  }

  resetTest(): void {
    this.protocol.resetTest();
  }
}
