import EmergencyWokersValidator from '../../src/validators/EmergencyWorkersValidator.js';
import AppError from '../../src/error/AppError.js';
import CONDITION from '../../src/constants/conditions/condition.js';
import ERROR_MESSAGES from '../../src/constants/messages/errorMessage.js';

describe('EmergencyWorkersValidator에 대한 유효성 검증 테스트', () => {
  describe('총 길이를 테스트한다', () => {
    it('배열 길이가 조건에 충족할때 에러를 던지지 않는다.', () => {
      const workers = new Array(CONDITION.min_workers_length).fill('Worker');
      expect(() => {
        EmergencyWokersValidator.validateTotalLength(workers);
      }).not.toThrow();
    });

    it('배열 길이가 충족하지 않을때 에러를 던진다.', () => {
      const workers = new Array(CONDITION.max_workers_length + 1).fill('Worker');
      expect(() => {
        EmergencyWokersValidator.validateTotalLength(workers);
      }).toThrow(AppError);
      expect(() => {
        EmergencyWokersValidator.validateTotalLength(workers);
      }).toThrow(ERROR_MESSAGES.invalid_value);
    });
  });

  describe('각각 근로자의 이름에 대한 유효성 검증', () => {
    it('조건에 맞는 이름이 입력값으로 들어왔을때 에러를 뱉지 않는다.', () => {
      const workers = ['준팍', '솔로스타'];
      expect(() => {
        EmergencyWokersValidator.validateIndividualWorkerNameLength(workers);
      }).not.toThrow();
    });

    it('조건에 충족하지 못하는 이름이 입력값으로 들어왔을때 에러를 뱉는다.', () => {
      const workers = ['asdxczdf', 'tooooooolonnnnggggggg'];
      expect(() => {
        EmergencyWokersValidator.validateIndividualWorkerNameLength(workers);
      }).toThrow(AppError);
      expect(() => {
        EmergencyWokersValidator.validateIndividualWorkerNameLength(workers);
      }).toThrow(ERROR_MESSAGES.invalid_value);
    });
  });

  describe('중복에 대한 검사', () => {
    it('이름이 중복값으로 들어오지 않는다면 에러를 뱉지 않는다', () => {
      const workers = ['준팍', '수아'];
      expect(() => {
        EmergencyWokersValidator.validateDuplication(workers);
      }).not.toThrow();
    });

    it('이름이 중복된다면 에러를 뱉는다.', () => {
      const workers = ['수아', '수아'];
      expect(() => {
        EmergencyWokersValidator.validateDuplication(workers);
      }).toThrow(AppError);
      expect(() => {
        EmergencyWokersValidator.validateDuplication(workers);
      }).toThrow(ERROR_MESSAGES.invalid_value);
    });
  });
});
