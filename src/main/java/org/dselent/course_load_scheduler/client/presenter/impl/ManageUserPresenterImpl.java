package org.dselent.course_load_scheduler.client.presenter.impl;

import org.dselent.course_load_scheduler.client.action.LoadHomePageAction;
import org.dselent.course_load_scheduler.client.action.LoadScheduleAction;
import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.action.ManageUserPageAction;
import org.dselent.course_load_scheduler.client.event.LoadHomePageEvent;
import org.dselent.course_load_scheduler.client.event.LoadScheduleEvent;
import org.dselent.course_load_scheduler.client.event.LoadSchedulePageEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.event.ManageUserPageEvent;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.presenter.ManageUserPresenter;
import org.dselent.course_load_scheduler.client.view.ManageUserView;


import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.inject.Inject;

public class ManageUserPresenterImpl extends BasePresenterImpl implements ManageUserPresenter {
	private IndexPresenter parentPresenter;
	private ManageUserView view;
	
	@Inject
	public ManageUserPresenterImpl(IndexPresenter parentPresenter, ManageUserView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
		
	}
	@Override
	public void bind()
	{
		HandlerRegistration registration;

		//button events for when they click on create or cancel buttons
				registration = eventBus.addHandler(ManageUserPageEvent.TYPE, this);
				eventBusRegistration.put(ManageUserPageEvent.TYPE, registration);
	}

	public IndexPresenter getParentPresenter() {
		return parentPresenter;
	}
	public ManageUserView getView() {
		return view;
	}

	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}

	@Override
	public void init()
	{
		bind();
	}
	
	@Override
	public void manageUser() {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void onManageUserPage(ManageUserPageEvent evt) {
		this.go(parentPresenter.getView().getViewRootPanel());
	}

	public void setParentPresenter(IndexPresenter parentPresenter) {
		this.parentPresenter = parentPresenter;
	}
	@Override
	public void loadAccountPage() {
		// TODO Auto-generated method stub
		eventBus.fireEvent(new ManageUserPageEvent(new ManageUserPageAction(true)));
		
	}
	@Override
	public void loadSchedulePage() {
		// TODO Auto-generated method stub
		eventBus.fireEvent(new LoadScheduleEvent(new LoadScheduleAction(true)));
		
	}
	@Override
	public void loadViewCoursesPage() {
		// TODO Auto-generated method stub
		eventBus.fireEvent(new LoadViewCoursesEvent(new LoadViewCoursesAction(true)));
		
	}
	@Override
	public void loadViewHomePage() {
		// TODO Auto-generated method stub
		eventBus.fireEvent(new LoadHomePageEvent(new LoadHomePageAction(true)));
		
	}
	
}
