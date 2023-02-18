package blackmint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import blackmint.test.TestService;

@RequestMapping("yi")
@Controller
public class TestController {

	final TestService testService;

	@Autowired
	public TestController(TestService testService) {
		this.testService = testService;
	}

	@GetMapping
	@ResponseBody
	public void testMethod () {
		String str = testService.test();
		System.out.println("str >> " + str);
		
	}
	
	@GetMapping("move")
	public String move () {
		return "Test.html";
	}	
}
