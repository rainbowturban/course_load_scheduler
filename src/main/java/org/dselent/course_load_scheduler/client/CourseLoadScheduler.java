package org.dselent.course_load_scheduler.client;

import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.presenter.impl.AddSectionPresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.EditSectionPresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.AdminCalendarPresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.IndexPresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.LoginPresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.ViewCoursesPresenterImpl;
import org.dselent.course_load_scheduler.client.view.IndexView;
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
		
		AdminCalendarPresenterImpl coursePresenter = injector.getAdminCalendarPresenter();
		coursePresenter.init();
		
		//indexPresenter.go(RootPanel.get("indexContainer"));
		indexPresenter.go(root);
		coursePresenter.go(indexView.getViewRootPanel());
		
		/*
		//Kayla Stuff
		EditSectionPresenterImpl editSectionPresenter = injector.getEditSectionPresenter();
		editSectionPresenter.init();
		//LoginView loginView = loginPresenter.getView();	
		
		//indexPresenter.go(RootPanel.get("indexContainer"));
		indexPresenter.go(root);
		editSectionPresenter.go(indexView.getViewRootPanel());
		*/
	}
}
