package org.dselent.course_load_scheduler.client.presenter.impl;

import org.dselent.course_load_scheduler.client.model.CourseInfo;

import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.presenter.ViewCoursesPresenter;
import org.dselent.course_load_scheduler.client.view.ViewCoursesView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.inject.Inject;
import java.util.List;

public class ViewCoursesPresenterImpl extends BasePresenterImpl implements ViewCoursesPresenter{

	private IndexPresenter parentPresenter;
	private ViewCoursesView view;
	
	
	@Inject
	public ViewCoursesPresenterImpl(IndexPresenter parentPresenter, ViewCoursesView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
	}
	
	@Override
	public void init()
	{
		bind();
	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;
		
		//button events for when they click on edit or remove buttons
		//registration = eventBus.addHandler(InvalidLoginEvent.TYPE, this);
		//eventBusRegistration.put(InvalidLoginEvent.TYPE, registration);
	}
	
	@Override
	public void go(HasWidgets container) {
		container.clear();
		container.add(view.getWidgetContainer());
	}

	//returns the view for the presenter
	@Override
	public ViewCoursesView getView() {
		return view;
	}
	
	
	//gets information about courses to fill the page with
	@Override
	public List<CourseInfo> retrieveCourses() {
		//************get courses returned in a list of CourseInfo objects*****
		
		//**iterate through list, creating a grid row entry for each object?***
		//^^This would probably implement the injector thing, whatever that actually does.
		
		
		return null;
		
	}
	

	

	
	
	
}
