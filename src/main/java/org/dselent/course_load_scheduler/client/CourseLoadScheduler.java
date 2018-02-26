package org.dselent.course_load_scheduler.client;

import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.presenter.impl.*;
import org.dselent.course_load_scheduler.client.service.impl.CreateAccountServiceImpl;
import org.dselent.course_load_scheduler.client.service.impl.HomeServiceImpl;
import org.dselent.course_load_scheduler.client.service.impl.MapServiceImpl;
import org.dselent.course_load_scheduler.client.service.impl.ScheduleServiceImpl;
import org.dselent.course_load_scheduler.client.service.impl.UserServiceImpl;
import org.dselent.course_load_scheduler.client.view.*;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.RootLayoutPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class CourseLoadScheduler implements EntryPoint
{

	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad()
	{
		RootLayoutPanel root = RootLayoutPanel.get();

		// Get the injector, which injected objects can be retrieved from
		final Injector injector = Injector.INSTANCE;
		
		IndexPresenterImpl indexPresenter = injector.getIndexPresenter(); // on-demand injection
		indexPresenter.init();
		IndexView indexView = indexPresenter.getView();		
		
		/*
		LoginPresenterImpl loginPresenter = injector.getLoginPresenter();
		loginPresenter.init();
		//LoginView loginView = loginPresenter.getView();	
		
		//indexPresenter.go(RootPanel.get("indexContainer"));
		indexPresenter.go(root);
		loginPresenter.go(indexView.getViewRootPanel());
		*/
		
		MapServiceImpl mapService = injector.getMapService();
		mapService.init();
		
		HomeServiceImpl homeService = injector.getHomeService();
		homeService.init();
		
		ScheduleServiceImpl schedService = injector.getScheduleService();
		schedService.init();		
		
		AdminCalendarPresenterImpl adminCalendarPresenter = injector.getAdminCalendarPresenter();
		adminCalendarPresenter.init();
		
		ViewCoursesPresenterImpl viewCoursePresenter = injector.getViewCoursesPresenter();
		viewCoursePresenter.init();
		
		EditCoursePresenterImpl editCoursePresenter = injector.getEditCoursePresenter();
		editCoursePresenter.init();
		
		AddCoursePresenterImpl addCoursePresenter = injector.getAddCoursePresenter();
		addCoursePresenter.init();
		
		AddSectionPresenterImpl addSectionPresenter = injector.getAddSectionPresenter();
		addSectionPresenter.init();

		EditSectionPresenterImpl editSectionPresenter = injector.getEditSectionPresenter();
		editSectionPresenter.init();
		
		CreateAccountPresenterImpl createAcctPresenter = injector.getCreateAccountPresenter();
		createAcctPresenter.init();
		
		HomePresenterImpl homePresenter = injector.getHomePresenter();
		homePresenter.init();
		
		LoginPagePresenterImpl loginPagePresenter = injector.getLoginPagePresenter();
		loginPagePresenter.init();

		ManageUserPresenterImpl manageUserPresenter = injector.getManageUserPresenter();
		manageUserPresenter.init();
		
		//Selent's additional pages
		ExamplePresenterImpl examplePresenter = injector.getExamplePresenter();
		examplePresenter.init();
		
		UserServiceImpl userService = injector.getUserService();
		userService.init();
		
		CreateAccountServiceImpl createAccountService = injector.getCreateAccountService();
		createAccountService.init();

		
		//Testing stuff for Hannah's page
		//---------------------------------------------------------------
		//ViewCoursesPresenterImpl coursePresenter = injector.getViewCoursesPresenter();
		//LoginPagePresenterImpl coursePresenter = injector.getLoginPagePresenter();
		//coursePresenter.init();
		
		//indexPresenter.go(RootPanel.get("indexContainer"));
		indexPresenter.go(root);
		loginPagePresenter.go(indexView.getViewRootPanel());
		//coursePresenter.go(indexView.getViewRootPanel());
		//----------------------------------------------------------/
		
		/*
		//Kayla Stuff
		/*EditSectionPresenterImpl editSectionPresenter = injector.getEditSectionPresenter();
		editSectionPresenter.init();
		//LoginView loginView = loginPresenter.getView();	
		
		//indexPresenter.go(RootPanel.get("indexContainer"));
		indexPresenter.go(root);
		editSectionPresenter.go(indexView.getViewRootPanel());
		*/
	}
}
