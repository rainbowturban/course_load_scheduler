package org.dselent.course_load_scheduler.client.presenter.impl;

import java.util.Iterator;
import java.util.List;

import org.dselent.course_load_scheduler.client.action.LoadHomePageAction;
import org.dselent.course_load_scheduler.client.action.LoadScheduleAction;
import org.dselent.course_load_scheduler.client.action.LoadViewCoursesAction;
import org.dselent.course_load_scheduler.client.action.ManageUserPageAction;
import org.dselent.course_load_scheduler.client.action.SendGetUsersAction;
import org.dselent.course_load_scheduler.client.event.LoadHomePageEvent;
import org.dselent.course_load_scheduler.client.event.LoadScheduleEvent;
import org.dselent.course_load_scheduler.client.event.LoadViewCoursesEvent;
import org.dselent.course_load_scheduler.client.event.ManageUserPageEvent;
import org.dselent.course_load_scheduler.client.event.ReceiveGetUsersEvent;
import org.dselent.course_load_scheduler.client.event.SendGetUsersEvent;
import org.dselent.course_load_scheduler.client.model.AccountInfo;
import org.dselent.course_load_scheduler.client.model.Faculty;
import org.dselent.course_load_scheduler.client.model.User;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.presenter.ManageUserPresenter;
import org.dselent.course_load_scheduler.client.view.ManageUserView;


import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Label;
import com.google.inject.Inject;

public class ManageUserPresenterImpl extends BasePresenterImpl implements ManageUserPresenter {
	private IndexPresenter parentPresenter;
	private ManageUserView view;
	private List<AccountInfo> globalRoster;

	@Inject
	public ManageUserPresenterImpl(IndexPresenter parentPresenter, ManageUserView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
		
		globalRoster = null;

	}

	@Override
	public void bind()
	{
		HandlerRegistration registration;

		//button events for when they click on create or cancel buttons
		registration = eventBus.addHandler(ManageUserPageEvent.TYPE, this);
		eventBusRegistration.put(ManageUserPageEvent.TYPE, registration);

//		registration = eventBus.addHandler(ReceiveGetUsersEvent.TYPE, this);
//		eventBusRegistration.put(ReceiveGetUsersEvent.TYPE, registration);
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
	public void onManageUserPage(ManageUserPageEvent evt) {
		this.go(parentPresenter.getView().getViewRootPanel());
	}

	public void setParentPresenter(IndexPresenter parentPresenter) {
		this.parentPresenter = parentPresenter;
	}

	@Override
	public void loadAccountPage() {
		eventBus.fireEvent(new ManageUserPageEvent(new ManageUserPageAction()));
	}

	@Override
	public void loadSchedulePage() {
		eventBus.fireEvent(new LoadScheduleEvent(new LoadScheduleAction()));
	}

	@Override
	public void loadViewCoursesPage() {
		eventBus.fireEvent(new LoadViewCoursesEvent(new LoadViewCoursesAction()));
	}

	@Override
	public void loadViewHomePage() {
		eventBus.fireEvent(new LoadHomePageEvent(new LoadHomePageAction()));
	}

	@Override
	public void retrieveUsers() {
		//Sends event to DB to retrieve terms
//		eventBus.fireEvent(new SendGetUsersEvent(new SendGetUsersAction()));
	}

/*	@Override
	public void onReceiveGetUsers(ReceiveGetUsersEvent evt) {
		globalRoster = evt.getAction().getUserList();
		fillUsers();
	}*/
	
/*	@Override
	public void fillUsers() {
		Grid userTable = view.getUsersGrid();
		userTable.clear();
		
		//Set headers
		String[] columnHeaders = {"First Name", "Last Name", "Email", "Rank", "Promote"};
		for(int i=0; i<columnHeaders.length; i++) {
			userTable.setWidget(0, i, new Label(columnHeaders[i]));
		}
		
		//Populate First Name cells
		Iterator<AccountInfo> firstNameIterator = globalRoster.iterator();
		while(firstNameIterator.hasNext()) {
			AccountInfo firstNameInfo = firstNameIterator.next();
			userTable.insertRow(userTable.getRowCount());
			userTable.setWidget(userTable.getRowCount()-1, 0, new Label(firstNameInfo.getFacultyFirstName()));
		}
		
		//Populate Last Name cells
		Iterator<AccountInfo> lastNameIterator = globalRoster.iterator();
		while(lastNameIterator.hasNext()) {
			AccountInfo lastNameInfo = lastNameIterator.next();
			userTable.insertRow(userTable.getRowCount());
			userTable.setWidget(userTable.getRowCount()-1, 1, new Label(lastNameInfo.getFacultyLastName()));
		}
		
		//Populate Email cells
		Iterator<AccountInfo> emailIterator = globalRoster.iterator();
		while(emailIterator.hasNext()) {
			AccountInfo emailInfo = emailIterator.next();
			userTable.insertRow(userTable.getRowCount());
			userTable.setWidget(userTable.getRowCount()-1, 2, new Label(emailInfo.getFacultyEmail()));
		}
		
		//Populate Rank cells
		Iterator<AccountInfo> rankIterator = globalRoster.iterator();
		while(rankIterator.hasNext()) {
			AccountInfo rankInfo = rankIterator.next();
			userTable.insertRow(userTable.getRowCount());
			userTable.setWidget(userTable.getRowCount()-1, 3, new Label(rankInfo.getFacultyType()));
		}
	}*/

	@Override
	public void promoteUser() {
		// TODO Auto-generated method stub

	}



}
