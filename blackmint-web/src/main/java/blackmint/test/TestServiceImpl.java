package blackmint.test;

import org.springframework.stereotype.Service;

@Service
public class TestServiceImpl implements TestService {
	@Override
	public String test() {

		String s = "서비스단";
		System.out.println(s);

		return s;
	}
}
